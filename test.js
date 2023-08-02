const TYPING_SPEED = 50;
let $targetList;

const init = () => {
    $targetList = document.querySelectorAll('[data-js="typing"]');

    setup();
    run();
}

const setup = () => {
    for (const $dom of $targetList) {
        const textList = $dom.innerText.split('');
        let   html     = '';

        for (const char of textList) {
            html += `<span>${char}</span>`;
        }

        $dom.innerHTML = html;
    }
}

const run = () => {
    let delay = 0;

    for (let i = 0; i < $targetList.length; i++) {
        const $target = $targetList[i];
        const $chars  = $target.querySelectorAll('span');

        for (let l = 0; l < $chars.length; l++) {
            const $char = $chars[l];
            const text  = $char.textContent;

            delay += TYPING_SPEED;
            if (text === ' ') delay += TYPING_SPEED * 2;

            const animate = () => {
                $char.style.display = 'inline-block';
            }

            setTimeout(animate, delay);

            if (i === $targetList.length - 1 && l === $chars.length - 1) {
                // 當所有文字都打完後，顯示按鈕並移除打字的虛線特效
				setTimeout(() => {
					const joinButton = document.getElementById('join-button');
					joinButton.style.display = 'block';
					joinButton.style.opacity = '1';
					document.querySelector('.cursor').style.animation = 'none';
				}, delay);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', init, false);

document.getElementById('join-button').addEventListener('click', function() {
    // 當按鈕被點擊時，這裡的程式碼會被執行
});
