export default function News() {
    return (
        <div className="flex gap-x-10 items-center justify-center">
            <div className="w-3xl flex flex-col gap-y-5">
                <div>
                    <button
                        className="btn border-0 rounded text-lg p-8"
                        style={{ backgroundColor: '#C81F00CC' }}
                    >
                        About inspiring Positivity every day.
                    </button>
                </div>
                <div className="text-4xl font-bold flex items-center justify-center ">
                    <div>
                        Hear what people are saying about our
                        <span style={{ color: '#CD1F01' }}> positivity</span>
                    </div>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.0001 12.5C68.6376 12.4993 62.3516 13.8863 56.5802 16.5643C50.8088 19.2424 45.6909 23.147 41.5835 28.006C37.476 32.865 34.4778 38.5614 32.7978 44.698C31.1178 50.8347 30.7965 57.2639 31.8563 63.5375C32.2126 65.675 33.0251 67.7687 34.2501 69.6312C36.2251 73.6125 39.1376 77.175 42.8938 80.5312L43.8938 81.4062C46.7063 83.8625 50.0001 86.7375 50.0001 90.625V90.9563C52.3751 88.825 54.8563 86.9125 57.1688 85.2063C58.1355 84.4854 59.0543 83.8104 59.9251 83.1813C61.7376 81.8688 63.3438 80.6937 64.8438 79.4938L66.1563 78.4437C75.2813 71.1562 79.7938 67.5563 81.4376 60.9813C82.5688 56.4562 81.4501 53.9 80.2501 52.4813C79.5957 51.7252 78.7908 51.1141 77.8868 50.6868C76.9828 50.2596 75.9996 50.0257 75.0001 50C73.6137 49.999 72.2663 50.4589 71.1699 51.3075C70.0735 52.1561 69.2904 53.3451 68.9438 54.6875C68.7534 55.4976 68.403 56.2616 67.9133 56.9345C67.4236 57.6074 66.8045 58.1758 66.0922 58.6062C65.3799 59.0366 64.5888 59.3205 63.7654 59.4411C62.9419 59.5617 62.1027 59.5166 61.2969 59.3085C60.4911 59.1004 59.7349 58.7334 59.0729 58.2292C58.4108 57.7249 57.8561 57.0935 57.4413 56.372C57.0265 55.6505 56.76 54.8534 56.6574 54.0275C56.5548 53.2016 56.6182 52.3636 56.8438 51.5625C57.8831 47.5374 60.2305 43.9719 63.5171 41.4263C66.8037 38.8808 70.843 37.4996 75.0001 37.5C80.1813 37.5 85.8688 39.7875 89.7751 44.3938C93.8813 49.225 95.5563 56.0438 93.5626 64.0187C90.8501 74.8688 82.9313 81.125 74.9188 87.4563L72.6563 89.2562C70.9251 90.6375 68.9313 92.0875 67.0001 93.4937L64.6063 95.2438C61.8876 97.2625 59.3188 99.275 57.0813 101.444C52.9813 105.419 50.4188 109.494 50.0438 114.381C50.7688 128.888 59.7563 137.5 68.7501 137.5C82.2251 137.5 92.7063 128.125 93.7376 112.925C94.2688 105.031 97.0501 99.55 100.619 94.5563C102.144 92.425 103.806 90.3875 105.456 88.35C108.113 85.075 110.769 81.8 112.894 78.1313C116.735 71.4799 118.758 63.9343 118.759 56.2532C118.759 48.5721 116.738 41.0263 112.897 34.3743C109.056 27.7224 103.532 22.1988 96.8797 18.359C90.2273 14.5192 82.6812 12.4985 75.0001 12.5Z" fill="#CD1F01" />
                    </svg>
                </div>
                <div className="text-xl">
                    In a world full of challenges, we believe positivity has the power to transform lives.
                    It’s a source of resilience, a spark for growth, and a pathway to joy.
                    Our mission is to help you embrace a brighter perspective and find gratitude in every moment.
                    No matter what life
                </div>
                <div>
                    <button
                        className="btn py-2 px-10 text-lg border-0 rounded"
                        style={{ backgroundColor: '#C81F00CC' }}
                    >
                        Checkout our resources!
                    </button>
                </div>
            </div>
            <div className="relative bottom-20">
                <img
                    className=""
                    src="/newsImg1.png"
                    alt="" />
            </div>
        </div>
    )
}