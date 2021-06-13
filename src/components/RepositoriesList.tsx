import { FC, useState} from 'react';
import { useActions } from '../hooks/useActions';
import { usedTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList:FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = usedTypedSelector((state) => state.repositories);
    console.log(data)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} type="text" />
                <button>Search</button>
            </form>
            {loading && <h3>loading...</h3>}
            {error && <h3>{error}</h3>}
            {data && data.map((name) => <div key={name}>{name}</div>)}
        </div>
    )
};

export default RepositoriesList;