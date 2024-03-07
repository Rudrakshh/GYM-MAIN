const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing
const OpenAIApi = require("openai");
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());


//open ai module

const openai = new OpenAIApi({
  apiKey: ""
});
app.post("/chat", async (req, res) => {
  
  const { prompt } = req.body;

  const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt}],
    });
    res.send(chatCompletion.choices[0].message);
});



// open ai module completed





// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/hotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define the User model
const UserSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  password: String, // Store hashed passwords
});

const User = mongoose.model('User', UserSchema);

const BlogUserSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // ...
});


const BlogUser = mongoose.model('BlogUser', BlogUserSchema);




 
// Register a new user
app.post('/api/register', async (req, res) => {
  try {

    
    // Hash the password before storing it
    const saltRounds = 10; // Adjust the number of rounds for your application
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    
    const newUser = new User({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      password: hashedPassword,
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Login route
// ... (Previous server setup)

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', email);

  try {
    const user = await User.findOne({ email });
    console.log('User found:', user);

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Trim the password input and the stored password before comparing
    const inputPasswordTrimmed = password.trim();
    const storedPasswordTrimmed = user.password.trim();
    
    const isPasswordValid = await bcrypt.compare(inputPasswordTrimmed, storedPasswordTrimmed);
    console.log('Password valid:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Return the username along with the successful login response
    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// ... (Rest of the server code)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Add this route to fetch the username by user ID
app.get('/api/user/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ username: user.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/user/:userId', async (req, res) => {
  console.log('Received request for user with ID:', req.params.userId);
  try {
    const user = await User.findById(req.params.userId);
    console.log('User found:', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      name: user.name,
      contact: user.contact,
      _id: user._id,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.get('/api/profile/:userId', async (req, res) => {
  console.log('Received request for user profile with ID:', req.params.userId);
  try {
    const user = await User.findById(req.params.userId);
    console.log('User found:', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      name: user.name,
      contact: user.contact,
      _id: user._id,
      email: user.email
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});




app.post('/api/posts', async (req, res) => {
  try {
    const newPost = new BlogUser({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId, // Make sure userId is set correctly
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the blog post' });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await BlogUser.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching blog posts' });
  }
});

app.delete('/api/posts/:postId', async (req, res) => {
  try {
    const post = await BlogUser.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user is authorized to delete the post
    if (post.userId.toString() !== req.body.userId) {
      return res.status(403).json({ error: 'You are not authorized to delete this post' });
    }

    await post.remove();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the blog post' });
  }
});






