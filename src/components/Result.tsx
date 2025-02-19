type ResultProps = {
    result: string;
  };
  
  const Result = ({ result }: ResultProps) => {
    return (
      <div>
        <h2>Resultado de la Detección:</h2>
        <p>{result}</p>
      </div>
    );
  };
  
  export default Result;
  