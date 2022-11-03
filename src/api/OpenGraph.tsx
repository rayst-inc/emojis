import { ImageResponse } from '@vercel/og'
import { description } from 'lib/next-seo'
import { NextRequest } from 'next/server'
import { getBaseURL } from 'utils/getBaseURL'

export const OpenGraph = async (req: NextRequest) => {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          fontFamily: '"Inter"',
        }}
      >
        <div tw="flex text-center text-white text-6xl font-black leading-normal">
          {description}
        </div>
        <div tw="flex mt-8">
          {[7, 10, 22, 2, 12, 17, 18, 6]
            // .map((_, i) => i + 1)
            // .slice(0, 8)
            .map((i) => (
              <div key={i} tw="flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  tw="rounded-lg w-10 h-10 m-2 self-center"
                  src={`${getBaseURL()}/_next/image?url=/emojis/apple/${i}.png&w=64&q=75`}
                  alt=""
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  tw="rounded-lg w-24 h-24 m-4"
                  src={`${getBaseURL()}/_next/image?url=/emojis/3d/${i}.png&w=1080&q=75`}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          style: 'normal',
          weight: 900,
          data: await fetch(new URL('./Inter-Black.ttf', import.meta.url)).then(
            (res) => res.arrayBuffer(),
          ),
        },
        {
          name: 'Inter',
          style: 'normal',
          weight: 400,
          data: await fetch(
            new URL('./Inter-Regular.ttf', import.meta.url),
          ).then((res) => res.arrayBuffer()),
        },
      ],
    },
  )
}
