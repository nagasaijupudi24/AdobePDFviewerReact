import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react'

const RApp = () => {
  return (
    <RPConfig>
      <RPProvider src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf">
        <RPDefaultLayout style={{ height: '660px' }}>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
  )
}
export default RApp