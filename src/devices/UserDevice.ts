/**
 * Accesses user media devices like microphone and streams the data.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class UserDevice {
  private constraints
  private _stream: MediaStream

  /**
   * Constructor.
   *
   * @param constraints
   */
  constructor (constraints) {
    this.constraints = constraints
  }

  /**
   * Initializing method.
   */
  public init (id: string): void {
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then((mediaStream) => {
        const video = document.getElementById(id) as HTMLVideoElement
        this._stream = mediaStream
        video.srcObject = mediaStream
        video.onloadedmetadata = (ev => video.play())
      })
      .catch((err) => console.log(err.name + ': ' + err.message))
  }

  /**
   * Gets the media stream.
   *
   * @returns {MediaStream}
   */
  get stream (): MediaStream {
    return this._stream
  }

  /**
   * Sets the media stream.
   *
   * @param {MediaStream} stream Device media stream
   */
  set stream (stream: MediaStream) {
    this._stream = stream
  }
}
