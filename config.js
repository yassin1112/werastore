// Discord Configuration
// خيار 1: استخدام Webhook (الأسهل لكن قد يواجه مشاكل)
window.DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1509227158906736730/xa7QNrKUcJ3FaYhihIk60mzyM4lIXqLuKGfvcbe1MN35tse-xBXRDtjtbKarIXT7pLJ0';

// خيار 2: استخدام البوت (معطل - نستخدم webhook فقط)
// ضع رابط السيرفر هنا (مثلاً: http://localhost:3000 أو https://your-server.com)
window.BOT_API_URL = 'http://localhost:3000/api/order';
// إذا كنت تستخدم البوت، فعّل هذا:
window.USE_BOT = false; // معطل - نستخدم webhook فقط

// Product Configuration
const PRODUCT_CONFIG = {
    'blox-fruits': {
        name: 'Blox Fruits',
        products: bloxFruitsProducts
    },
    'murder-mystery-2': {
        name: 'Murder Mystery 2',
        products: murderMystery2Products
    },
    'adopt-me': {
        name: 'Adopt Me',
        products: adoptMeProducts
    },
    'robux': {
        name: 'Robux',
        products: robuxProducts
    }
};

