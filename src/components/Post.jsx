import React from 'react';
import PropTypes from 'prop-types' ;

function Post({profileImg ,nickName, date, postImg, altImg, userLike, description, numberComments }) {
  return (
<div className='Post'>

<div className='header'>
    <div>
        <img src= {profileImg} alt="foto usuário" />
        <h5> {nickName} <img src="https://w7.pngwing.com/pngs/267/59/png-transparent-blue-and-white-check-logo-illustration-verified-badge-logo-youtube-youtube-thumbnail.png"></img><span class="d1">• {date}</span></h5>
    </div>
    <h3><ItemMenu icone={<IoIosMore />} /></h3>
</div>

<div className='conteudo'>
    <img src={postImg} alt={altImg} />
</div>

<div className='botoes'>
    <div>
    <ItemMenu icone={<MdFavoriteBorder />} />
    <ItemMenu icone={<AiOutlineMessage />} />
    <ItemMenu icone={<RiShareForwardLine />} />
    </div>
    <ItemMenu icone={<RiFlag2Line />} />
</div>

<div className='comentarios'>
    <h5><span class="d2">liked by</span> {userLike} <span class="d2">and</span> others</h5>
    <div>
        <h5>{nickName} <span class="d2">{description}</span></h5>
    </div>
    <h5><span class="d3">View all {numberComments} comments</span></h5>    
</div>

<div className='Add-comentario'>
    <h5><span class="d3">Add a comment...</span></h5>
    <div>
        <ItemMenu icone={<CiFaceSmile />} />
    </div>
</div>

</div>
  )
}

Post.propTypes = {
    profileImg: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    postImg: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    userLike: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numberComments: PropTypes.number.isRequired,
}

export default Post;
