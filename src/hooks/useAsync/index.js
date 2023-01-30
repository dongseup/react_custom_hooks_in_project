import useAsync from './useAsync';

export default function AsyncComponent() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true; // api 성공유무 체크

            setTimeout(() => {
                success ? resolve('hi') : reject('Error');
            }, 1000);
        });
    });

    return (
        <div>
            <div>Loading : {loading.toString()}</div>
            <div>{error}</div>
            <div>{value}</div>
        </div>
    );
}
