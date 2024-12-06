import { useBlockProps, RichText } from '@wordpress/block-editor';
import ArrowIcon from './arrow_right.svg';
import ArrowIconGreen from './arrow_right_green.svg';

function save({ attributes }) {
    const { imageUrl, imageAlt, name, designation, description } = attributes;
    const blockProps = useBlockProps.save({
        className: 'team-member'
    });

    return (
        <div {...blockProps}>
            <div className="team-member-content">
                {imageUrl && (
                    <div className="team-member-image-wrapper">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="team-member-image"
                        />
                        <img
                            src={ArrowIcon}
                            alt=""
                            className="team-member-arrow"
                        />
                        <img
                            src={ArrowIconGreen}
                            alt=""
                            className="team-member-arrow-green"
                        />
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
                            <button className="team-member-popup-close">
                                &times;
                            </button>
                            <div className="team-member-popup-inner">
                                <div className="team-member-popup-image">
                                    <img src={imageUrl} alt={imageAlt} />
                                </div>
                                <div className="team-member-popup-details">
                                    <RichText.Content
                                        tagName="h3"
                                        value={name}
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        value={designation}
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        value={description}
                                    />
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
