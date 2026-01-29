
        let currentMode = 'simple';

        function updateRadius() {
            const previewBox = document.getElementById('previewBox');
            let borderRadiusValue;
            let cssText;

            if (currentMode === 'simple') {
                const topLeft = document.getElementById('topLeft').value;
                const topRight = document.getElementById('topRight').value;
                const bottomRight = document.getElementById('bottomRight').value;
                const bottomLeft = document.getElementById('bottomLeft').value;

                document.getElementById('topLeftValue').textContent = topLeft + 'px';
                document.getElementById('topRightValue').textContent = topRight + 'px';
                document.getElementById('bottomRightValue').textContent = bottomRight + 'px';
                document.getElementById('bottomLeftValue').textContent = bottomLeft + 'px';

                borderRadiusValue = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
                cssText = `border-radius: ${borderRadiusValue};`;
            } else {
                const topLeftH = document.getElementById('topLeftH').value;
                const topLeftV = document.getElementById('topLeftV').value;
                const topRightH = document.getElementById('topRightH').value;
                const topRightV = document.getElementById('topRightV').value;
                const bottomRightH = document.getElementById('bottomRightH').value;
                const bottomRightV = document.getElementById('bottomRightV').value;
                const bottomLeftH = document.getElementById('bottomLeftH').value;
                const bottomLeftV = document.getElementById('bottomLeftV').value;

                document.getElementById('topLeftHValue').textContent = topLeftH + 'px';
                document.getElementById('topLeftVValue').textContent = topLeftV + 'px';
                document.getElementById('topRightHValue').textContent = topRightH + 'px';
                document.getElementById('topRightVValue').textContent = topRightV + 'px';
                document.getElementById('bottomRightHValue').textContent = bottomRightH + 'px';
                document.getElementById('bottomRightVValue').textContent = bottomRightV + 'px';
                document.getElementById('bottomLeftHValue').textContent = bottomLeftH + 'px';
                document.getElementById('bottomLeftVValue').textContent = bottomLeftV + 'px';

                borderRadiusValue = `${topLeftH}px ${topRightH}px ${bottomRightH}px ${bottomLeftH}px / ${topLeftV}px ${topRightV}px ${bottomRightV}px ${bottomLeftV}px`;
                cssText = `border-radius: ${borderRadiusValue};`;
            }

            previewBox.style.borderRadius = borderRadiusValue;
            document.getElementById('cssOutput').innerHTML = `<code>${cssText}</code>`;
        }

        function switchMode(mode) {
            currentMode = mode;
            const buttons = document.querySelectorAll('.mode-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            if (mode === 'simple') {
                document.getElementById('simpleControls').classList.remove('hidden');
                document.getElementById('advancedControls').classList.add('hidden');
            } else {
                document.getElementById('simpleControls').classList.add('hidden');
                document.getElementById('advancedControls').classList.remove('hidden');
            }

            updateRadius();
        }

        function copyCSS() {
            const cssText = document.getElementById('cssOutput').textContent;
            navigator.clipboard.writeText(cssText).then(() => {
                const btn = document.querySelector('.copy-btn');
                const originalText = btn.textContent;
                btn.textContent = '✓ Copied to Clipboard!';
                btn.classList.add('copied');

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            });
        }

        updateRadius();
    