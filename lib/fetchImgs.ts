const fetchImgs = () =>
    fetch('/api/getImgs', {
        cache: 'no-store'
    }).then(res => res.json())



export default fetchImgs