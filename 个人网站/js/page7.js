document.addEventListener('DOMContentLoaded', function () {
            var submitBtn = document.getElementById('submitBtn');
            submitBtn.addEventListener('click', function () {
                var name = document.getElementById('name').value;
                var message = document.getElementById('message').value;
                var timestamp = new Date().toLocaleString();

                if (name && message) {
                    var guestbook = document.querySelector('.guestbook');
                    var newMessage = document.createElement('div');
                    newMessage.classList.add('message');
                    newMessage.innerHTML = `
                    <p class="name">${name}</p>
                    <p>${message}</p>
                    <p class="timestamp">${timestamp}</p>
                `;
                    guestbook.appendChild(newMessage);

                    // Clear input fields
                    document.getElementById('name').value = '';
                    document.getElementById('message').value = '';
                } else {
                    alert('请填写姓名和留言。'); <!-- 修改为中文提示 -->
                }
            });
        });