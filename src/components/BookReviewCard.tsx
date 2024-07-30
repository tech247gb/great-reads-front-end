import React from 'react';
import { FaUser, FaHeart } from 'react-icons/fa';
import StarRating from './StarRating';
import { Book } from '../types/Book';

interface BookReviewCardProps {
    book: Book;
    onViewMore: (book: Book) => void;
}

const BookReviewCard: React.FC<BookReviewCardProps> = ({ book, onViewMore }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold mb-2 p-4 bg-white bg-opacity-75">{book.title}</h3>
                    <FaHeart className="text-green-700 mr-2 w-6 h-6" title="Featured" />
                </div>


                <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
                <div className="flex items-center mb-2">
                    <FaUser className="text-gray-600 mr-2" />
                    <p className="text-gray-600">{book.author}</p>
                    <div className="ml-auto">
                        <StarRating rating={book.rating} />
                    </div>
                </div>
                <p className="text-gray-800 mt-2 mb-4">{book.review.substring(0, 50)}...</p>
                <div className="flex justify-center">
                    <button
                        onClick={() => onViewMore(book)}
                        className="bg-primary text-primaryText p-2 rounded hover:bg-opacity-80"
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookReviewCard;
