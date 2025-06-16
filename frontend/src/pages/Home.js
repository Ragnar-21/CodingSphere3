import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Paper,
  useTheme,
  Chip,
} from '@mui/material';
import {
  Code as CodeIcon,
  Terminal as TerminalIcon,
  People as PeopleIcon,
  EmojiEvents as EmojiEventsIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const featureItems = [
  {
    title: 'Coding Duels',
    description: 'Challenge your friends to coding duels with waiting, active, and completed states.',
    icon: <PeopleIcon fontSize="large" />,
  },
  {
    title: 'Practice Mode',
    description: 'Sharpen your skills with coding challenges suitable for your level.',
    icon: <CodeIcon fontSize="large" />,
  },
  {
    title: 'Real-time Competition',
    description: 'See who can solve problems faster and more efficiently in head-to-head competitions.',
    icon: <SpeedIcon fontSize="large" />,
  },
  {
    title: 'Multiple Problem Challenges',
    description: 'Face multiple coding challenges in a single duel to test your diverse skills.',
    icon: <EmojiEventsIcon fontSize="large" />,
  },
];

const languageCards = [
  {
    name: 'Python',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB',
  },
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
  },
  {
    name: 'Java',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#007396',
  },
  {
    name: 'C++',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    color: '#00599C',
  },
];

// Sample problem data
const sampleProblems = [
  {
    id: 1,
    title: 'Two Sum',
    description: 'Find two numbers in an array that add up to a specific target.',
    difficulty: 'Easy',
    tags: ['Arrays', 'Hash Table'],
  },
  {
    id: 2,
    title: 'Merge Intervals',
    description: 'Merge all overlapping intervals and return non-overlapping intervals.',
    difficulty: 'Medium',
    tags: ['Arrays', 'Sorting'],
  },
  {
    id: 3,
    title: 'Median of Two Sorted Arrays',
    description: 'Find the median of two sorted arrays in O(log(m+n)) time.',
    difficulty: 'Hard',
    tags: ['Arrays', 'Binary Search', 'Divide & Conquer'],
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          pt: 8,
          pb: 6,
          borderRadius: '0 0 20px 20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>              <Typography
                component="h1"
                variant="h2"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                Competitive Coding Platform
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Challenge friends to coding duels or practice your skills with CodingSphere.
                Our complete state management system tracks waiting, active, and completed duels.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  component={Link}
                  to="/practice"
                  startIcon={<TerminalIcon />}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Practice Mode
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  component={Link}
                  to="/duel"
                  sx={{ px: 4, py: 1.5 }}
                >
                  Dueling Mode
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Coding"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" color="textPrimary" gutterBottom sx={{ mb: 6 }}>
          Why Choose CodingSphere?
        </Typography>
        <Grid container spacing={4}>
          {featureItems.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 4,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>      {/* How It Works Section */}
      <Box sx={{ backgroundColor: theme.palette.background.default, py: 8 }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" color="textPrimary" align="center">
              How CodingSphere Works
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    <PeopleIcon fontSize="large" />
                  </Box>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    Create or Join a Duel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Set up a duel with your preferred settings or join an existing one with a duel ID. Duels start in the waiting state until the host is ready.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    <CodeIcon fontSize="large" />
                  </Box>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    Solve Problems Together
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Face the same coding challenges and compete to see who can solve them faster. Perfect for friendly competition and improving your skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    <EmojiEventsIcon fontSize="large" />
                  </Box>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    Track Progress & Win
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The system tracks submissions and scores in real-time, displaying who's winning. When completed, see final results with the winner highlighted.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>      {/* Practice Mode Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 6 } }}>
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                Practice Mode
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                Improve your coding skills at your own pace with our practice mode. Get challenges 
                based on difficulty levels to help you prepare for technical interviews and 
                competitive programming.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Paper 
                    elevation={0}
                    sx={{
                      bgcolor: 'success.light', 
                      color: 'success.dark', 
                      p: 1, 
                      borderRadius: '50%',
                      display: 'flex'
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>1</Typography>
                  </Paper>
                  <Typography variant="body1">Choose your Codeforces handle</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Paper 
                    elevation={0}
                    sx={{
                      bgcolor: 'warning.light', 
                      color: 'warning.dark', 
                      p: 1, 
                      borderRadius: '50%',
                      display: 'flex'
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2</Typography>
                  </Paper>
                  <Typography variant="body1">Set difficulty range and number of problems</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Paper 
                    elevation={0}
                    sx={{
                      bgcolor: 'error.light', 
                      color: 'error.dark', 
                      p: 1, 
                      borderRadius: '50%',
                      display: 'flex'
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>3</Typography>
                  </Paper>
                  <Typography variant="body1">Start solving with our integrated timer</Typography>
                </Box>
              </Box>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                component={Link}
                to="/practice"
                sx={{ mt: 4, px: 4, py: 1.5 }}
                startIcon={<CodeIcon />}
              >
                Start Practice Mode
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                bgcolor: '#f8fafc',
                boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
              }}
            >
              <Box sx={{ p: 2, bgcolor: '#3498db', color: '#fff', borderRadius: 2, mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Practice Settings
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Handle
                </Typography>
                <Paper sx={{ p: 2, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                  <Typography variant="body1">YourCodeforcesHandle</Typography>
                </Paper>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Difficulty Range
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Paper sx={{ p: 2, flex: 1, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                    <Typography variant="body1">1200</Typography>
                  </Paper>
                  <Typography>to</Typography>
                  <Paper sx={{ p: 2, flex: 1, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                    <Typography variant="body1">1800</Typography>
                  </Paper>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Number of Problems
                </Typography>
                <Paper sx={{ p: 2, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                  <Typography variant="body1">3</Typography>
                </Paper>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>      {/* Duel System Section */}
      <Box sx={{ backgroundColor: theme.palette.background.paper, py: 8 }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  height: '400px', 
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ display: 'flex', height: '100%' }}>
                  <Box 
                    sx={{ 
                      width: '50%',
                      height: '100%',
                      bgcolor: '#2c3e50',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ color: '#fff', mr: 2 }}>Player 1</Typography>
                      <Chip label="8 pts" size="small" sx={{ bgcolor: '#4caf50', color: '#fff' }} />
                    </Box>
                    <Paper sx={{ p: 2, bgcolor: '#1e2a3a', color: '#66c0f4', flex: 1, borderRadius: 2, fontFamily: '"Fira Code", monospace' }}>
                      <Typography component="pre" sx={{ fontSize: '0.9rem' }}>
                        {`// Problem solved!
function solution(input) {
  const nums = input.split(' ').map(Number);
  return nums.reduce((a, b) => a + b, 0);
}

// Submission accepted
// Time: 0.23s
// Memory: 12.4 MB`}
                      </Typography>
                    </Paper>
                  </Box>
                  <Box 
                    sx={{ 
                      width: '50%',
                      height: '100%',
                      bgcolor: '#fff',
                      p: 3,
                      borderLeft: '2px solid',
                      borderColor: 'primary.main',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ color: '#2c3e50', mr: 2 }}>Player 2</Typography>
                      <Chip label="5 pts" size="small" sx={{ bgcolor: '#ff9800', color: '#fff' }} />
                    </Box>
                    <Paper sx={{ p: 2, bgcolor: '#f5f5f5', color: '#333', flex: 1, borderRadius: 2, fontFamily: '"Fira Code", monospace' }}>
                      <Typography component="pre" sx={{ fontSize: '0.9rem' }}>
                        {`// Working on solution...
function solution(input) {
  // Parsing input
  const lines = input.trim().split('\\n');
  const nums = lines[0].split(' ').map(Number);
  
  // Calculating result
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}`}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(52, 152, 219, 0.5)'
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#fff' }}>VS</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 6 } }}>
                <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Duel System with State Management
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Our complete duel system features multiple states to organize competitions clearly:
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 2, 
                          bgcolor: 'background.paper', 
                          borderRadius: 2,
                          borderLeft: '4px solid #8e44ad',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#8e44ad' }}>Waiting State</Typography>
                        <Typography variant="body2">
                          Created duels start in waiting state. Players can join, but the competition starts when the host activates it.
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 2, 
                          bgcolor: 'background.paper',
                          borderRadius: 2,
                          borderLeft: '4px solid #27ae60',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#27ae60' }}>Active State</Typography>
                        <Typography variant="body2">
                          During this phase, participants can solve problems, and the timer is running. Live scoring tracks progress.
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper 
                        elevation={2}
                        sx={{ 
                          p: 2, 
                          bgcolor: 'background.paper', 
                          borderRadius: 2,
                          borderLeft: '4px solid #2980b9',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#2980b9' }}>Completed State</Typography>
                        <Typography variant="body2">
                          Final results are displayed with scores and the winner is highlighted. Review performance and solutions.
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    component={Link}
                    to="/duel"
                    sx={{ px: 3 }}
                  >
                    Go to Duels
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>      {/* Key Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s',
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                <SpeedIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                Integrated Timer
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Track your solving time with our built-in timer system
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s',
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                <PeopleIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                Multi-Player Support
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Compete with friends in real-time coding competitions
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s',
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                <CodeIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                Codeforces Integration
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Access problems from Codeforces and track submissions
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s',
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                <EmojiEventsIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                Live Scoring
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Real-time score updates and winner highlights
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>      {/* CTA Section */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: '#fff', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Ready to improve your coding skills?
              </Typography>
              <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
                Start practicing now or challenge a friend to a coding duel with CodingSphere.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="column" spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/practice"
                  sx={{ py: 2, color: '#fff', fontWeight: 'bold' }}
                >
                  Start Practice Mode
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/duel"
                  sx={{ py: 2, color: '#fff', fontWeight: 'bold', borderColor: '#fff' }}
                >
                  Create a Duel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;