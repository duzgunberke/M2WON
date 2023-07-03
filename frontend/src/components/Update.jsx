import axios from 'axios';

const InputComponent = () => {
  const handleButtonClick = () => {

    let discordId=document.getElementById("inputField").value
    console.log(discordId)
    axios
    .post("http://127.0.0.1:3000/api/writeTheFile", { data: discordId })
    .then((response)=>console.log(response))

    document.getElementById("Message").style.display="inline"
   };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <input
        id="inputField"
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          border: '1px solid gray',
          padding: '5px',
          fontSize: '16px',
          marginBottom: '10px',
        }}
      />
      <button
        style={{
          width: '150px',
          height: '40px',
          borderRadius: '5px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          fontSize: '16px',
        }}
        onClick={handleButtonClick}

  
      >
        UPDATE
      </button>
      
      
<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-3 hidden" role="alert" id='Message'>
  <p class="font-bold">Informational message</p>
  <p class="text-sm">Discord ID is updated successfully</p>
</div>
    </div>
  );
};

export default InputComponent;