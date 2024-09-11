const amount = document.getElementById("amount");
const actionBtn = document.getElementById("actionBtn");
const notifications = [...document.querySelectorAll(".message")];
const notificationSign = [...document.querySelectorAll(".notification_sign")];

const unreadNotifications = notifications.filter(notification => {
    return notification.classList.contains("unread")
});

amount.textContent = unreadNotifications.length;

actionBtn.addEventListener("click", () => {
    notifications.forEach(notifications => notifications.classList.remove("unread"));
    notificationSign.forEach(sign => sign.classList.add("hidden"));
    amount.textContent = 0;
});