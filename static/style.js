*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:
    linear-gradient(
    135deg,
    #0f172a,
    #1e3a8a,
    #2563eb
    );
}

.container{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.weather-card{
    width:420px;
    padding:35px;
    border-radius:25px;

    backdrop-filter:blur(20px);

    background:rgba(255,255,255,0.08);

    border:1px solid rgba(255,255,255,0.2);

    text-align:center;

    color:white;

    box-shadow:
    0 8px 32px rgba(0,0,0,0.3);
}

.weather-card h1{
    margin-bottom:20px;
    font-size:2.5rem;
}

.search-box{
    display:flex;
    gap:10px;
    margin-bottom:25px;
}

.search-box input{
    flex:1;
    padding:12px;
    border:none;
    border-radius:12px;
    outline:none;
}

.search-box button{
    background:#06b6d4;
    color:white;
    border:none;
    padding:12px 18px;
    border-radius:12px;
    cursor:pointer;
    transition:0.3s;
}

.search-box button:hover{
    transform:translateY(-3px);
}

#icon{
    width:120px;
    margin-top:10px;
}

.temp{
    font-size:4rem;
    font-weight:700;
}

.details{
    display:flex;
    justify-content:space-between;
    margin-top:25px;
}

.detail-card{
    width:48%;
    padding:15px;
    border-radius:15px;

    background:
    rgba(255,255,255,0.08);
}
