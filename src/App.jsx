import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-md mx-auto bg-white">
        <header className="flex justify-between items-center p-4 border-b">
            <h1 className="text-xl font-bold">Instagram</h1>
            <i className="fas fa-paper-plane"></i>
        </header>
        <div className="flex space-x-4 p-4 border-b">
            {['Your Story', 'User1', 'User2', 'User3', 'User4'].map((user, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center">
                        <img src="https://placehold.co/50x50" alt={`${user} profile`} className="rounded-full" />
                    </div>
                    <span className="text-xs mt-1">{user}</span>
                </div>
            ))}
        </div>
        <div className="p-4">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="Username profile" className="w-10 h-10 rounded-full" />
                    <span className="ml-2 font-bold">Username</span>
                </div>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="bg-gray-200 h-64 mb-2"></div>
            <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-4">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                </div>
                <i className="far fa-bookmark"></i>
            </div>
            <div className="text-sm mb-2">17,230 views</div>
            <div className="text-sm">
                <span className="font-bold">Username</span> instagram-template <span className="text-blue-500">#template</span>
            </div>
        </div>
        
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around">
            <i className="fas fa-home text-xl"></i>
            <i className="fas fa-search text-xl"></i>
            <i className="fas fa-plus-square text-xl"></i>
            <i className="fas fa-heart text-xl"></i>
            <i className="fas fa-user text-xl"></i>
        </footer>
    </div>
)
}

export default App
