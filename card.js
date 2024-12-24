// function createSnowflake() {
//     const snowflake = document.createElement('div');
//     snowflake.className = 'snowflake';
//     snowflake.innerHTML = '❄';
    
//     // Random starting position
//     const startPosition = Math.random() * window.innerWidth;
//     snowflake.style.left = startPosition + 'px';
    
//     // Random animation duration between 5-15 seconds
//     const animationDuration = 5 + Math.random() * 10;
    
//     // Random horizontal drift
//     const drift = Math.random() * 50 - 25;
    
//     // Apply the animation
//     snowflake.style.animation = `fall ${animationDuration}s linear`;
//     snowflake.style.transform = `translate(${drift}px, -20px)`;
    
//     document.body.appendChild(snowflake);
    
//     // Remove snowflake after animation completes
//     setTimeout(() => {
//       snowflake.remove();
//     }, animationDuration * 1000);
//   }
  
  
//   window.addEventListener('load', function() {
//     createSnowflake();
//     // Create snowflakes at regular intervals
//   setInterval(createSnowflake, 200);
  
//   // Initial snowflakes
//   for(let i = 0; i < 15; i++) {
//     setTimeout(createSnowflake, i * 300);
//   }
  
//   });