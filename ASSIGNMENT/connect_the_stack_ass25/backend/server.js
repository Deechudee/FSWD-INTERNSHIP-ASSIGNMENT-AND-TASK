const app = require('./app');

// Run on port 5000 (required by assignment)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

