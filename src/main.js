const gameFieldNode = document.querySelector('.block.main')

const snake = {
  body: [
    { x: 6, y: 1 },
    { x: 5, y: 1 },
    { x: 4, y: 1 },
    { x: 3, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 1 },
  ],
  vector: 'ArrowRight',
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

const moveSnake = (action = snake.vector) => {
  // stop antivector
  if (snake.vector === 'ArrowRight' && action === 'ArrowLeft') return
  if (snake.vector === 'ArrowLeft' && action === 'ArrowRight') return
  if (snake.vector === 'ArrowUp' && action === 'ArrowDown') return
  if (snake.vector === 'ArrowDown' && action === 'ArrowUp') return
  snake.vector = action

  const prevNeckCoordinates = { ...snake.body[1] }
  //move snakeTale
  for (let i = snake.body.length - 1; i > 0; i--) {
    // console.log(snake.body[i], i);
    snake.body[i].x = snake.body[i - 1].x
    snake.body[i].y = snake.body[i - 1].y
  }

  const prevHeadCoordinates = snake.body[0]

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

  console.log(snake.body[0], prevNeckCoordinates);

  if (snake.body[0].y === prevNeckCoordinates.y && snake.body[0].x === prevNeckCoordinates.x) {
    snake.body[0] = prevHeadCoordinates

  }
  console.log('after reset', snake.body[0], prevNeckCoordinates);

  render()

  snake.body.forEach((b, i) => {
    if (snake.body[0].x === b.x && snake.body[0].y === b.y && i !== 0) {
      colision()
    }
  })
}
setInterval(moveSnake, 500)

window.addEventListener('keydown', (e) => {
  // moveSnake(e.code)
  snake.vector = e.code
  console.log(e.code);
})

const colision = () => {
  location.reload()
}