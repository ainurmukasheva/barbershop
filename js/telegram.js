const BOT_TOKEN = '7662182188:AAFZycZQPU_pUpOOme9o2M44fwDZ2UijfHU';
const CHAT_ID = '-1002550528808';
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.querySelector('.appointment-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const date = document.querySelector('#appointment-date').value;
  const time = document.querySelector('#appointment-time').value;
  const name = document.querySelector('#appointment-name').value;
  const phone = document.querySelector('#appointment-phone').value;

  const message = `
📨 <b>Новая заявка!</b>
📅 Дата: ${date}
🕒 Время: ${time}
👤 Имя: ${name}
📞 Телефон: ${phone}
    `.trim();

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    alert('Заявка отправлена!');
    this.reset();
  } catch (error) {
    alert('Ошибка при отправке. Попробуйте позже.');
    console.error('Telegram API error:', error);
  }
});
