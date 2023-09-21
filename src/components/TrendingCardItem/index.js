import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import {
  VideoCardContainer,
  Thumbnail,
  ChannelLogo,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from './styledComponents'

const TrendingCardItem = props => {
  const {TrendingData} = props
  const {
    thumbnailUrl,
    title,
    channel,
    publishedAt,
    viewCount,
    id,
  } = TrendingData

  const {profileImageUrl, name} = channel

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <Link
      to={`/videos/${id}`}
      className="link"
      //   onClick={() => changeActiveMenu('INITIAL')}
    >
      <VideoCardContainer>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <ThumbnailText>
          <div>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
          </div>
          <VideoTextContainer>
            <VideoTitle>{title}</VideoTitle>
            <VideoDetailsContainer>
              <VideoDetailsText>{name}</VideoDetailsText>
              <VideoDetailsContainer2>
                <VideoDetailsText>{viewCount} views</VideoDetailsText>
                <VideoDetailsText>{postedAt} ago</VideoDetailsText>
              </VideoDetailsContainer2>
            </VideoDetailsContainer>
          </VideoTextContainer>
        </ThumbnailText>
      </VideoCardContainer>
    </Link>
  )
}

export default TrendingCardItem
