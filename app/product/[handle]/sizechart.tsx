"use client"

import { useState } from "react"

const SizingChart = () => {
    const imageUrl = "/sizechartfinalvibha.jpeg" // Placeholder image URL
  
    const [showFullScreen, setShowFullScreen] = useState(false)
  
    const handleImageClick = () => {
      setShowFullScreen(true)
    }
  
    const handleCloseFullScreen = () => {
      setShowFullScreen(false)
    }
  
    return (
      <div className="text-sm font-regular ">
        <div className="py-3">Click to enlarge</div>
        <div className="grid grid-cols-1 gap-y-8">
          <div className="flex items-start gap-x-2">
            {/* <img
              src="/sizechart.jpeg"
              alt="sizechart   onClick={handleImageClick}"
            /> */}
  
            <img
              className="image"
              src={imageUrl}
              alt="Full Screen"
              onClick={handleImageClick}
            />
            {showFullScreen && (
              <div
                className="fullscreen-overlay active"
                onClick={handleCloseFullScreen}
              >
                <div className="fullscreen-image">
                  <img
                    className="centered-image"
                    src={imageUrl}
                    alt="Full Screen"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
export default SizingChart