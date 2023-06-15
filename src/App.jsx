import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Main from "./pages/Main"
import Thanks from "./pages/Thanks"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/', element: <LoginPage />
      },
      {
        path: '/main', element: <Main />
      },
      {
        path: '/thanks', element: <Thanks />
      },
    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
