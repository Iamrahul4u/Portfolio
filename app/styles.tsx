body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #fff;
}

/* Lghtness */
.overlay {
  /* position: absolute; */
  /* bottom: 0; */
  /* left: 0; */
  width: 100%;
  z-index: 100;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0.9) 80%,
    rgba(255, 255, 255, 0.25) 95%,
    rgba(255, 255, 255, 0) 100%
  );
}

.text {
  font-family: "Yanone Kaffeesatz";
  font-size: 80px;
  display: flex;
  position: absolute;
  bottom: 20vh;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  user-select: none;

  .wrapper {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;

    .letter {
      transition: ease-out 1s;
      transform: translateY(40%);
    }
    .shadow {
      transform: scale(1, -1);
      color: #999;
      transition: ease-in 5s, ease-out 5s;
    }
    &:hover {
      .letter {
        transform: translateY(-100%);
      }
      .shadow {
        opacity: 0;
        transform: translateY(200%);
      }
    }
  }
}

.button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
  transition: all 0.2s ease;
}
