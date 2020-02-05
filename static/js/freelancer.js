body {
  margin: 0;
  background: #25A3FF;
  font-family: 'Roboto', sans-serif;
}

h1 {
  position: relative;
  color: #fff;
  opacity: 0;
  transition: .8s ease-in-out;
}

#progress {
  position: absolute;
  background: #0069ec;
  height: 100vh;
  width: 0;
  transition: width 0.2s ease-in-out;
}

.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/******
  Form
 ******/

#register {
  background: #fff;
  position: relative;
  width: 410px;
  padding: 2px 15px 20px 15px;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3);
  transition: transform .1s ease-in-out;
}

#register.close {
  width: 0;
  padding: 0;
  overflow: hidden;
  transition: .8s ease-in-out;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0);
}

.next {
  position: absolute;
  right: 20px;
  bottom: 10px;
  font-size: 40px;
  color: #25a3ff;
  float: right;
  cursor: pointer;
}
.next:hover {color: #333}
.wrong .next {color: #ff2d26}
.close .next {color: #fff}

#inputContainer {
  position: relative;
  opacity: 0;
  width: 350px;
  margin-top: 25px;
  transition: opacity .3s ease-in-out;
}

#inputContainer input {
  width: 100%;
  padding: 0 5px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  outline: 0;
  background: transparent;
  box-shadow:none;
}

#inputLabel {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  font-size: 20px;
  font-weight: bold;
  padding: 0 5px;
  transition: .2s ease-in-out;
}

#inputContainer input:valid + #inputLabel {
  top: -15px;
  font-size: 11px;
  font-weight: normal;
  color: #9e9e9e;
}

#inputProgress {
  position: absolute;
  border-bottom: 2px solid #25a3ff;
  padding: 3px 0;
  width: 0;
  transition: width .6s ease-in-out;
}

.wrong #inputProgress {
  border-color: #ff2d26;
}
