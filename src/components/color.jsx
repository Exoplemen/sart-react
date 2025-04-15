function BlockColor(props){
    return (
        <div style={{
            backgroundColor: props.color,
            padding:"25px",
            margin:"10px"
        }}>
            Этот блок - {props.color}
        </div>
    );
}

export default BlockColor;