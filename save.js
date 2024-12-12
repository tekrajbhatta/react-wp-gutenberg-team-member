import { useBlockProps, RichText } from '@wordpress/block-editor';
import ArrowIcon from './arrow_right.svg';
import ArrowIconGreen from './arrow_right_green.svg';
import CloseIcon from './close_btn.svg';
import LogoLinkedIn from './ion_logo-linkedin.svg';

function save({ attributes }) {
    // const { imageUrl, imageAlt, name, designation, description, linkedinLink = '#' } = attributes;
    const { 
        imageUrl = '', 
        imageAlt = '', 
        name = '', 
        designation = '', 
        description = '', 
        linkedinLink = '' 
    } = attributes;
    const blockProps = useBlockProps.save({
        className: 'team-member'
    });

    return (
        <div {...blockProps}>
            <div className="team-member-content">
                {imageUrl && (
                    <div className="team-member-image-wrapper">
                        <img src={imageUrl} alt={imageAlt} className="team-member-image" />
                        <img src={ArrowIcon} alt="Arrow Icon" className="team-member-arrow" />
                        <img src={ArrowIconGreen} alt="Arrow Icon Green" className="team-member-arrow-green" />
                        <div className="team-member-info">
                            <RichText.Content
                                tagName="h3"
                                className="team-member-name"
                                value={name}
                            />
                            <RichText.Content
                                tagName="p"
                                className="team-member-designation"
                                value={designation}
                            />
                        </div>
                    </div>
                )}

                {/* Popup Structure */}
                {imageUrl && (
                    <div className="team-member-popup">
                        <div className="team-member-popup-content">
                            <button
                                className="team-member-popup-close"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    togglePopup();
                                }}
                            >
                                <img src={CloseIcon} alt="Close" />
                            </button>
                            <div className="team-member-popup-inner">
                                <div className="team-member-popup-image">
                                    <img src={imageUrl} alt={imageAlt} />
                                    {linkedinLink && (
                                    <div className='linkedin-box'>
                                        <img src={LogoLinkedIn} alt="Close" />
                                        <a 
                                            href={linkedinLink || '#'} 
                                            className='linkedin-link' 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Follow on LinkedIn
                                        </a>
                                    </div>
                                    )}
                                </div>
                                <div className="team-member-popup-details">
                                    {name && (
                                        <RichText.Content
                                            tagName="h3"
                                            className="team-member-name"
                                            value={name}
                                        />
                                    )}
                                    {designation && (
                                        <RichText.Content
                                            tagName="p"
                                            className="team-member-designation"
                                            value={designation}
                                        />
                                    )}
                                    {description && (
                                        <RichText.Content
                                            tagName="p"
                                            className="team-member-description"
                                            value={description}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default save;
