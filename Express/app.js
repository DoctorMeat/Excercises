const express = require('express');
const { mean, median, mode } = require('./helpers');
const app = express();
const PORT = 3000;

app.get('/mean', (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }
  const numArray = nums.split(',').map((num) => parseFloat(num));
  if (numArray.some((num) => isNaN(num))) {
    return res.status(400).json({ error: 'Invalid number provided' });
  }
  const result = mean(numArray);
  res.json({ operation: 'mean', value: result });
});

app.get('/median', (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }
  const numArray = nums.split(',').map((num) => parseFloat(num));
  if (numArray.some((num) => isNaN(num))) {
    return res.status(400).json({ error: 'Invalid number provided' });
  }
  const result = median(numArray);
  res.json({ operation: 'median', value: result });
});

app.get('/mode', (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }
  const numArray = nums.split(',').map((num) => parseFloat(num));
  if (numArray.some((num) => isNaN(num))) {
    return res.status(400).json({ error: 'Invalid number provided' });
  }
  const result = mode(numArray);
  res.json({ operation: 'mode', value: result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
