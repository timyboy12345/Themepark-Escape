export default {
    getAll() {
        return new Promise((resolve => {
            const data = [
                {type: 'grey', disabled: false, name: "The Gates", lng: 194.5, lat: 413.5},
                {type: 'green', disabled: false, name: "The Forest", lng: 260.875, lat: 381.0625},
                {type: 'gold', disabled: false, name: "The Village", lng: 200.21875, lat: 344.375},
                {type: 'green', disabled: true, name: "The Dark Woods", lng: 253.5, lat: 235.5},
                {type: 'violet', disabled: true, name: "The Castle", lng: 435.5, lat: 229.25},
                {type: 'grey', disabled: true, name: "The Ruins", lng: 475.625, lat: 217.75},
                {type: 'violet', disabled: true, name: "The Town", lng: 173.5, lat: 81.5},
            ];

            resolve(data);
        }))
    },
    getData(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(" TEST ");
            }, 2000);
        })
    }
}
