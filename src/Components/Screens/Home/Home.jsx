import useTelegram from '../../../Hooks/useTelegram';
import { RxCross1 } from 'react-icons/rx'
import { BsFillHouseFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Home() {
    const {user, onClose} = useTelegram();
    return ( 
        <>
            <div className='bot-name'>
                <p>@schedule_10t_bot</p>
            </div>
            <div className="username-text">
                <h2>Привет, {user?.username}!</h2>
            </div>
            <div className="buttons">
                <Link to='/profile' style={{
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    border: '1px solid black',
                    padding: '15px 115px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    color: 'black',
                }}>
                    Профиль
                </Link>
                <Link to='/schedule' style={{
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    border: '1px solid black',
                    padding: '15px 100px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    color: 'black',
                    marginTop: '30px',
                }}>
                    Расписание
                </Link>
                <Link to='/info' style={{
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    border: '1px solid black',
                    padding: '15px 130px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    color: 'black',
                    marginTop: '30px',
                }}>
                    О боте
                </Link>
            </div>
            <div className="nav-buttons">
                <button onClick={onClose()}>
                    <RxCross1 size={25}/> 
                </button>
                <Link to='/' style={{
                    textDecoration: 'none',
                    width: '60px',
                    height: '35px',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: 'rgba(179, 179, 179)',
                    borderRadius: '10px',
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                }}>
                    <BsFillHouseFill size={28}/>
                </Link>
            </div>
        </>
     );
}

export default Home;