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
  `
}

render()

const moveSnake = (action) => {
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

