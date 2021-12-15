import dotenv from 'dotenv'

dotenv.config()

export const BACKEND_URL=process.env.NODE_ENV === 'development' ? "http://localhost:5000/" : "https://mike-jon-gleb-cap.herokuapp.com/"