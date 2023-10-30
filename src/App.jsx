import React from 'react'
import './App.scss'

const App = (props) => {

  React.useEffect(() => {

  },[])

  const [area, setArea] = React.useState("")

  const conditions = [
    (item) => /[a-zA-Z]/.test(item),
    (item) => item.length >= 5,
    (item) => /[A-Z]/.test(item),
    (item) => /\d/.test(item),
    (item) => /\d{2,}/.test(item),
    (item) => /[а-яА-Я]/.test(item),
    (item) => /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|~`]/.test(item),
    (item) => item.includes("7006652"),
    (item) => (item.includes("Письмо") || item.includes("письмо")),
    (item) => (item.includes("0.5") || item.includes("0,5")),
    (item) => item.includes("43"),
    (item) => item.includes("console.log(66)"),
    (item) => (item.includes("3.14159265358979323846264338327950288") || item.includes("3,14159265358979323846264338327950288")),
    (item) => (item.includes("ARPANET") || item.includes("arpanet")),
  ]

  // 12 25 20 24 10 23 19 27 3-1-10-1

  // 10 15

  return (
    <div className="app">
      <h1>Gimme Your Password</h1>
      <textarea placeholder='Your password' onChange={(event) => setArea(event.target.value)} defaultValue={area}></textarea>
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area) && conditions[8](area) && conditions[9](area) && conditions[10](area) && conditions[11](area) && conditions[12](area) && conditions[13](area)) && <a target='_blank' href='https://clck.ru/3vyXS'>https://clck.ru/3vyXS</a>}
      <div style={{ border: `1px solid ${conditions[0](area) ? "lime" : "red"}` }} className="app__condition">
        <span style={{ color: `${conditions[0](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать минимум одну латинскую букву.</span>
      </div>
      {conditions[0](area) &&
        <div style={{ border: `1px solid ${conditions[1](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[1](area) ? "lime" : "red"}` }}>Ваш пароль должен быть минимум пять символов в длинну.</span>
        </div>
      }
      {(conditions[1](area) && conditions[0](area)) &&
        <div style={{ border: `1px solid ${conditions[2](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[2](area) ? "lime" : "red"}` }}>Как минимум одна из букв в пароле должна быть заглавной.</span>
        </div>
      }
      {(conditions[2](area) && conditions[1](area) && conditions[0](area)) &&
        <div style={{ border: `1px solid ${conditions[3](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[3](area) ? "lime" : "red"}` }}>Пароль должен содержать минимум одну цифру.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area)) &&
        <div style={{ border: `1px solid ${conditions[4](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[4](area) ? "lime" : "red"}` }}>Пароль должен содержать минимум одно число.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area)) &&
        <div style={{ border: `1px solid ${conditions[5](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[5](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать минимум одну букву на кириллице.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area)) &&
        <div style={{ border: `1px solid ${conditions[6](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[6](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать минимум один специальный символ.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area)) &&
        <div style={{ border: `1px solid ${conditions[7](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[7](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать результат умножения числа 1234 на 5678.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area)) &&
        <div style={{ border: `1px solid ${conditions[8](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[8](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать 12 25 20 24 10 23 19 27 3-1-10-1</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area) && conditions[8](area)) &&
        <div style={{ border: `1px solid ${conditions[9](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[9](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать результат результат логорифма 2 по основанию 4.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area) && conditions[8](area) && conditions[9](area)) &&
        <div style={{ border: `1px solid ${conditions[10](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[10](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать определитель матрицы [[2, 3, 1], [1, 0, 4], [5, 2, 1]].</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area) && conditions[8](area) && conditions[9](area) && conditions[10](area)) &&
        <div style={{ border: `1px solid ${conditions[11](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[11](area) ? "lime" : "red"}` }}>Ваш пароль должен содержать код вывода числа 66 на консоль браузера.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area) && conditions[8](area) && conditions[9](area) && conditions[10](area) && conditions[11](area)) &&
        <div style={{ border: `1px solid ${conditions[12](area) ? "lime" : "red"}` }} className="app__condition">
          <span style={{ color: `${conditions[12](area) ? "lime" : "red"}` }}>Число π с точностью 35 знаков после запятой.</span>
        </div>
      }
      {(conditions[0](area) && conditions[1](area) && conditions[2](area) && conditions[3](area) && conditions[4](area) && conditions[5](area) && conditions[6](area) && conditions[7](area) && conditions[8](area) && conditions[9](area) && conditions[10](area) && conditions[11](area) && conditions[12](area)) &&
        <>
          <div href="https://en.wikipedia.org/wiki/Vint_Cerf" style={{ cursor: "pointer", border: `1px solid ${conditions[13](area) ? "lime" : "yellow"}` }} className="app__condition">
            <span style={{ color: `${conditions[13](area) ? "lime" : "yellow"}` }}>Перейди по ссылке и запиши ответ.</span>
          </div>
        </>
      }
    </div >
  )
}

export default App
