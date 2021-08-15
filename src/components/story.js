import './story.css';

const Story = ({ bolded, children }) => {
    return (
        <div className="story">
            <div className="wrapper">
                <div className="bolded">{bolded && <h2>{bolded}</h2>}</div>
                <div className="bolded">{!bolded && <h2>{children}</h2>}</div>
                {bolded && <div className="content">{children}</div>}
            </div>
        </div>
    );
};

export default Story;
