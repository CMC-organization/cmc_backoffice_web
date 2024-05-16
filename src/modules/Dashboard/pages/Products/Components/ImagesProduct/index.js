import ImgPlaceholderIcon from '../../../../../../images/svg/ImgPlaceholderIcon';

const ImagesProduct = ({ images }) => {
 return  images.length > 0 ? (
    images.map((file, key) => {
        return (
        <div
            key={key}
            className="min-w-28 min-h-28  max-w-28 max-h-28 border border-gray-60 rounded-lg p-1"
        >
            <img
            src={URL.createObjectURL(file)}
            alt="imagem do produto"
            className="w-full h-full object-fill"
            />
        </div>
        )
    })
    ) : (
        <div className="border min-w-28 max-w-28 min-h-28 max-h-28 flex flex-col justify-center items-center gap-2 rounded-md border-dashed text-center">
            <ImgPlaceholderIcon />
            <span className='text-sm px-2'>Upload foto ou vídeo</span>
        </div>
    )
};

export default ImagesProduct;
