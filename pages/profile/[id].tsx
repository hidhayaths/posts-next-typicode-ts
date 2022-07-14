import { getUser } from "../../shared/api"
import { UserType } from "../../shared/types"
import styles from '../../styles/Profile.module.css'

type Props = {
    user:UserType
}

type ServerSideProps = {
    params:{
        id: number
    }
}

export default function Profile({user}:Props){

    return(
        <div className={styles.container}>
            <p>{user.name}</p>
            <p>@{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
        </div>
    )

}


export const getServerSideProps = async({params}:ServerSideProps) =>{

    return {
        props:{
            user : await getUser(params.id)
        }
    }

}