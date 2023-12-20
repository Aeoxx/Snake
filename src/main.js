const gameFieldNode = document.querySelector('.block.main')

const snake = {
  body: [
    { x: 10, y: 1 },
    { x: 3, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 1 },
  ]
}

const render = () => {
  gameFieldNode.innerHTML = '';
  gameFieldNode.innerHTML += `
    <div 
      class="snake head" 
      style="
        left: ${(snake.body[0].x - 1) * 9.45}%; 
        top: ${(snake.body[0].y - 1) * 9.45}%;
    ">
      <div class="in-snake"></div>
    </div>
  `;

  snake.body.forEach((b, i) => {
    if (i === 0) return
    gameFieldNode.innerHTML += `
    <div 
      class="snake" 
      style="
        left: ${(b.x - 1) * 9.45}%; 
        top: ${(b.y - 1) * 9.45}%;
    ">
      <div class="in-snake"></div>
    </div>
  `;
  })

}

render()

const moveSnake = (action) => {

  //move snakeTale
  for (let i = snake.body.length - 1; i > 0; i--) {
    // console.log(snake.body[i], i);
    snake.body[i].x = snake.body[i - 1].x
    snake.body[i].y = snake.body[i - 1].y
  }
  //move snakeHead
  switch (action) {
    case 'ArrowUp':
      snake.body[0].y--;
      if (snake.body[0].y < 1) snake.body[0].y = 10;
      break;
    case 'ArrowRight':
      snake.body[0].x++;
      if (snake.body[0].x > 10) snake.body[0].x = 1;
      break;
    case 'ArrowDown':
      snake.body[0].y++;
      if (snake.body[0].y > 10) snake.body[0].y = 1;
      break;
    case 'ArrowLeft':
      snake.body[0].x--;
      if (snake.body[0].x < 1) snake.body[0].x = 10;
      break;
  }
  render()
}

window.addEventListener('keydown', (e) => {
  moveSnake(e.code)
  console.log(e.code);
})

