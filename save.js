import { useBlockProps, RichText } from '@wordpress/block-editor';
import ArrowIcon from './arrow_right.svg';

function save({ attributes }) {
    const { imageUrl, imageAlt, name, designation } = attributes;
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
                    </div>
                    
                )}
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
        </div>
    );
}

export default save;
