
const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number, index) => <li key={`${number}_${index}`}>{number}</li>)
  return list
}

export const MappingArrays  = () => {

const numbers = [1, 2, 3, 4, 5, 2];

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

export default MappingArrays;