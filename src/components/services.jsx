export const Services = (props) => {
  const josinServices = (e) => {
    e.preventDefault()
    window.location.href = 'https://labs.grayworld.io/';
  }
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            GrayWorld Supports everything of BlockChain Industry
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4' onClick={josinServices }>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {d.name == 'NFT LaunchPad' ?(
                      <>
                      <a className='btn btn-custom page-scroll'>Go to LaunchPad</a>
                      </>
                    ):(<></>)}
                    
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
