import SessionItem from "./SessionItem";

type SessionProps = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;
}

type SessionListProps = {
    sessions: SessionProps[];
}

const SessionList = ({ sessions }: SessionListProps) => {

    return(
        <ul id="sessions-list">
            {sessions.map((session) => (
                <li key={session.id}>
                    <SessionItem {...session} />
                </li>
            ))}
        </ul>
    );
};

export default SessionList;