import { Link } from "react-router-dom";

export const navbar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div>
          <Link to={'home'}>
            <span className="">Anime Hub</span>
          </Link>
        </div>
      </header>
    </div>
  )
}
