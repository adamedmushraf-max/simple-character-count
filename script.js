const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const ringProgress = document.getElementById('ringProgress');
const ringPercent = document.getElementById('ringPercent');
const submitBtn = document.getElementById('submitBtn');
const statusMsg = document.getElementById('statusMsg');

const MAX = 300;
const CIRCUMFERENCE = 2 * Math.PI * 19; // r = 19

function updateCounter() {
  const length = textInput.value.length;
  const percent = length / MAX;

  charCount.textContent = length;
  ringPercent.textContent = Math.round(percent * 100) + '%';

  const offset = CIRCUMFERENCE - percent * CIRCUMFERENCE;
  ringProgress.style.strokeDashoffset = offset;

  if (percent >= 0.9) {
    ringProgress.style.stroke = 'var(--danger)';
    charCount.style.color = 'var(--danger)';
  } else if (percent >= 0.7) {
    ringProgress.style.stroke = 'var(--warn)';
    charCount.style.color = 'var(--ink)';
  } else {
    ringProgress.style.stroke = 'var(--accent)';
    charCount.style.color = 'var(--ink)';
  }

  statusMsg.textContent = '';
}

textInput.addEventListener('input', updateCounter);

submitBtn.addEventListener('click', function () {
  const value = textInput.value.trim();
  if (!value) {
    statusMsg.style.color = 'var(--danger)';
    statusMsg.textContent = 'Write something before submitting.';
    return;
  }
  console.log('Submitted text:', value);
  statusMsg.style.color = 'var(--success)';
  statusMsg.textContent = 'Submitted successfully.';
  textInput.value = '';
  updateCounter();
});

updateCounter();