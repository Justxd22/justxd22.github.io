'use client'
import Image from 'next/image'

export default function LoadingAnimation() {


  return (
    <div className="cat-loader-container">
      <div className="cat-wrapper">
        <div className="catt">

          <div className="face">
            {/* Mouth */}
            <Image
              src="/img/mouth.svg"
              alt="mouth"
              width={31}
              height={100}
              className="mouth preventSelect"
            />
            
            {/* Eyes */}
            <div className="eye eye-left preventSelect eyein">
              <div className="eye-inner">
                <div className="eyeafter"></div>
              </div>
            </div>
            <div className="eye eye-right preventSelect eyein">
              <div className="eye-inner">
                <div className="eyeafter"></div>
              </div>
            </div>
            
            {/* Muzzle */}
            <div className="muzzle"></div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
    </div>
  )
}