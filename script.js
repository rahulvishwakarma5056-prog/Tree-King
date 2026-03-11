const pricing = {
  'Tree Removal': { Small: [350, 700], Medium: [750, 1500], Large: [1600, 3200] },
  'Tree Trimming': { Small: [220, 450], Medium: [460, 900], Large: [950, 1800] },
  'Stump Grinding': { Small: [180, 380], Medium: [390, 760], Large: [780, 1400] },
  'Emergency Service': { Small: [600, 1200], Medium: [1300, 2500], Large: [2600, 5000] },
};

const urgencyMultiplier = {
  Standard: 1,
  Urgent: 1.35,
};

function formatCurrency(value) {
  return `$${Math.round(value).toLocaleString('en-US')}`;
}

function updateEstimate() {
  const service = document.getElementById('serviceType').value;
  const size = document.getElementById('treeSize').value;
  const urgency = document.getElementById('urgency').value;
  const [min, max] = pricing[service][size];
  const multiplier = urgencyMultiplier[urgency];

  const result = document.getElementById('estimateResult');
  result.textContent = `Estimated Range: ${formatCurrency(min * multiplier)} - ${formatCurrency(max * multiplier)}`;
}

document.getElementById('serviceType').addEventListener('change', updateEstimate);
document.getElementById('treeSize').addEventListener('change', updateEstimate);
document.getElementById('urgency').addEventListener('change', updateEstimate);

document.getElementById('estimatorForm').addEventListener('submit', (event) => {
  event.preventDefault();
});

document.getElementById('year').textContent = new Date().getFullYear();
updateEstimate();
