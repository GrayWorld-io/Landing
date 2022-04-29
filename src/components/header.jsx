export const Header = (props) => {
  const josinDiscord = (e) => {
    e.preventDefault()
    alert('Will open with NFT Launchpad!')
  }
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#' onClick={josinDiscord }
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Join Discord
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
