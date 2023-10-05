import Button from '../button/Button';
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';
import UserListItem from '../user_list_item/UserListItem';
import './AddFriends.css'

export default function AddFriends() {

    const handlerAddFriend = () => {
        
    }

    const iconAddFriend = <Button handlerClick={handlerAddFriend}> Añadir</Button>

    return (
        <>
            <Header goBack> Añadir Amigo</Header>
            <div className='add_friends_container'>
                <Searcher placeholder={'Buscar usuario...'}/>
                <div className='user_list_container'>
                    <UserListItem username="Carlos1023" icon={iconAddFriend} />
                    <UserListItem username="Marcelo11" icon={iconAddFriend} />
                </div>

            </div>
        </>
    );
}