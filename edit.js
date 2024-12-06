import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import ArrowIcon from './arrow_right.svg';
import ArrowIconGreen from './arrow_right_green.svg';
import CloseIcon from './close_btn.svg';
import LogoLinkedIn from './ion_logo-linkedin.svg';

function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageId, imageAlt, name, designation, description, linkedin, popupOpen } = attributes;
    const blockProps = useBlockProps({
        className: 'team-member'
    });

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
            imageAlt: media.alt || ''
        });
    };

    const removeImage = () => {
        setAttributes({
            imageUrl: '',
            imageId: null,
            imageAlt: ''
        });
    };

    // Toggle popup state (for editing experience)
    const togglePopup = () => {
        setAttributes({
            popupOpen: !popupOpen
        });
    };

    return (
        <div {...blockProps}>
            <div className="team-member-content">
                <div className="team-member-image-wrapper">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <>
                                    {!imageUrl ? (
                                        <Button
                                            onClick={open}
                                            className="team-member-upload-button"
                                            variant="secondary"
                                        >
                                            <span>{__('Upload Image', 'vdplug')}</span>
                                        </Button>
                                    ) : (
                                        <div className="team-member-image-container">
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
                                            <div className="team-member-image-buttons">
                                                <Button
                                                    onClick={open}
                                                    variant="primary"
                                                >
                                                    {__('Replace', 'vdplug')}
                                                </Button>
                                                <Button
                                                    onClick={removeImage}
                                                    variant="primary"
                                                    isDestructive
                                                >
                                                    {__('Remove', 'vdplug')}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>

                    <div className="team-member-info">
                        <RichText
                            tagName="h3"
                            className="team-member-name"
                            value={name}
                            onChange={(name) => setAttributes({ name })}
                            placeholder={__('Enter name...', 'vdplug')}
                        />
                        <RichText
                            tagName="p"
                            className="team-member-designation"
                            value={designation}
                            onChange={(designation) => setAttributes({ designation })}
                            placeholder={__('Enter designation...', 'vdplug')}
                        />

                        <div className="linkedin-link-input">
                            <label htmlFor="linkedin-link">
                                {__('LinkedIn Profile URL', 'vdplug')}
                            </label>
                            <input
                                type="url"
                                id="linkedin-link"
                                value={linkedin}
                                onChange={(e) => setAttributes({ linkedin: e.target.value })}
                                placeholder={__('Enter LinkedIn profile URL', 'vdplug')}
                                className="components-text-control__input"
                            />
                        </div>

                        <RichText
                            tagName="p"
                            className="team-member-description"
                            value={description}
                            onChange={(description) => setAttributes({ description })}
                            placeholder={__('Enter description...', 'vdplug')}
                        />
                    </div>
                </div>
                {/* Popup Preview for Editor */}
                {imageUrl && (
                    <div
                        className={`team-member-popup-preview ${popupOpen ? 'is-open' : ''}`}
                        onClick={(e) => {
                            // Close the popup when clicking outside the content
                            if (e.target.classList.contains('team-member-popup-preview')) {
                                togglePopup();
                            }
                        }}
                    >
                        <div className="team-member-popup-content">
                            <button
                                className="team-member-popup-close"
                                onClick={(e) => {
                                    e.stopPropagation(); // In edit.js, this prevents triggering the parent click event
                                    togglePopup(); // In edit.js, this closes the popup
                                }}
                            >
                                <img src={CloseIcon} alt="Close" />
                            </button>
                            <div className="team-member-popup-inner">
                                <div className="team-member-popup-image">
                                    <img src={imageUrl} alt={imageAlt} />
                                    <div className='linkedin-box'>
                                        <img src={LogoLinkedIn} alt="Close" />
                                        <a href={linkedin} target='_blank' className='linkedin-link'>Follow on LinkedIn</a>
                                    </div>
                                </div>
                                <div className="team-member-popup-details">
                                    <h3>{name}</h3>
                                    <p>{designation}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Edit;
